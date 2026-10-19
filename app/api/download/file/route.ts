import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const targetUrl = searchParams.get('url');
    const filename = searchParams.get('filename') || 'media.mp4';

    if (!targetUrl || !/^https?:\/\//i.test(targetUrl.trim())) {
      return new NextResponse('Invalid or missing target URL', { status: 400 });
    }

    const cleanUrl = targetUrl.trim();

    // Stream the remote media file
    const remoteResponse = await fetch(cleanUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        Accept: '*/*',
      },
    });

    if (!remoteResponse.ok) {
      return new NextResponse(
        `Failed to fetch file from source server: ${remoteResponse.statusText}`,
        { status: remoteResponse.status }
      );
    }

    const contentType =
      remoteResponse.headers.get('content-type') || 'application/octet-stream';
    const contentLength = remoteResponse.headers.get('content-length');

    // Clean filename for HTTP header
    const sanitizedFilename = filename.replace(/["\r\n]/g, '').trim() || 'media.mp4';

    const headers = new Headers();
    // Forces browser to save directly to disk instead of playing in-browser player
    headers.set('Content-Disposition', `attachment; filename="${sanitizedFilename}"; filename*=UTF-8''${encodeURIComponent(sanitizedFilename)}`);
    headers.set('Content-Type', contentType);
    if (contentLength) {
      headers.set('Content-Length', contentLength);
    }
    // Enable range requests for seeking / resumable downloads if needed
    const acceptRanges = remoteResponse.headers.get('accept-ranges');
    if (acceptRanges) {
      headers.set('Accept-Ranges', acceptRanges);
    }

    return new NextResponse(remoteResponse.body, {
      status: 200,
      headers,
    });
  } catch (err: unknown) {
    const error = err as Error;
    console.error('Error streaming download file:', error);
    return new NextResponse(
      error.message || 'Error occurred while streaming media file',
      { status: 500 }
    );
  }
}
