// i just took this from my own blog lol
import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(req) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get('title');
  const font = fetch(
    new URL('./GeistMono-Medium.otf', import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          // alignItems: 'flex-start',
          justifyContent: 'flex-start',
          backgroundImage: 'url(https://vikinghacks.com/vh_og_bg.png)',
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            paddingTop: '10%',
            display: 'flex',
            fontSize: 130,
            fontFamily: 'Geist',
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'black',
            lineHeight: '120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Geist',
          data: fontData,
          style: 'medium',
          weight: 500
        },
      ],
    }
  );
}