export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const prompt = url.searchParams.get('prompt') || 'space collide';
    const inputs = {
      prompt: prompt,
    };

    const response = await env.AI.run(
      "@cf/stabilityai/stable-diffusion-xl-base-1.0",
      inputs,
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
        "requested-prompt": prompt
      },
    });
  },
} satisfies ExportedHandler<Env>;
