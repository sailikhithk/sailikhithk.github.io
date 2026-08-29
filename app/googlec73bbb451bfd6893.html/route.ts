export async function GET() {
  return new Response("google-site-verification: googlec73bbb451bfd6893.html", {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
