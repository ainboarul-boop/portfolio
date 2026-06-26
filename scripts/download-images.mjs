import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images");

const images = {
  "hero-bg.jpg": "https://www.figma.com/api/mcp/asset/b67dc523-8eee-4d5d-bac0-e38d05f9073f",
  "hero-overlay.png": "https://www.figma.com/api/mcp/asset/e7e76d99-6d9c-4cd1-92dd-e97282aec6e4",
  "logo.png": "https://www.figma.com/api/mcp/asset/ad5b55a7-1df9-4566-b85f-50effcd9a6e6",
  "logo-light.png": "https://www.figma.com/api/mcp/asset/971bf6c6-d51d-461c-b93e-e3800404ecf3",
  "intro-bride.jpg": "https://www.figma.com/api/mcp/asset/4208307b-cb0f-41a9-be8c-a768ee7b70f2",
  "events-model.jpg": "https://www.figma.com/api/mcp/asset/541e835b-49c4-4a3f-a70a-2dd4f11f3c5d",
  "events-bg.png": "https://www.figma.com/api/mcp/asset/53b7efb7-d4dd-427f-99f2-6531e1057e52",
  "logo-watermark.png": "https://www.figma.com/api/mcp/asset/2eca5567-217b-428f-b8c1-6a4225b02e0b",
  "fabricated-bg.jpg": "https://www.figma.com/api/mcp/asset/f8e2f628-8ae1-47e3-bc66-e2f52fcfc931",
  "gallery-hands.jpg": "https://www.figma.com/api/mcp/asset/9ab622c3-d5e7-4a5c-8143-559ffa3a18ac",
  "gallery-1.jpg": "https://www.figma.com/api/mcp/asset/3529b751-9c4c-4e8b-99de-b7f2a52774ea",
  "gallery-2.jpg": "https://www.figma.com/api/mcp/asset/c517b5d5-b518-4a3b-b12f-3fd2b263a970",
  "gallery-3.jpg": "https://www.figma.com/api/mcp/asset/01ec8f85-dc37-4948-9465-00fbb3bc6edb",
  "newborn-footer.jpg": "https://www.figma.com/api/mcp/asset/07d2f380-9750-48a4-bf23-eb91bd09789e",
  "about-hero.jpg": "https://www.figma.com/api/mcp/asset/97855471-8b10-49f4-919a-6214eae73e54",
  "about-portrait.jpg": "https://www.figma.com/api/mcp/asset/ea0b8270-792c-40ce-8873-19819f5663b0",
  "about-watermark.png": "https://www.figma.com/api/mcp/asset/9e525996-c4bb-40d4-ba3d-bc58f845336a",
  "portfolio-hero.jpg": "https://www.figma.com/api/mcp/asset/658a13fd-5066-4ebb-8dc0-fae85fe9fdcf",
  "portfolio-banner-1.jpg": "https://www.figma.com/api/mcp/asset/b3299a3e-6feb-4f4b-b033-64cf3e6ead28",
  "portfolio-banner-2.jpg": "https://www.figma.com/api/mcp/asset/046d252d-9965-45e2-b515-815cf71a51f5",
  "portfolio-01.jpg": "https://www.figma.com/api/mcp/asset/6552dd01-77ff-4dd3-8e52-25a10b66e12a",
  "portfolio-02.jpg": "https://www.figma.com/api/mcp/asset/ed51d145-00dd-42d6-8264-9b4995bcacd3",
  "portfolio-03.jpg": "https://www.figma.com/api/mcp/asset/a4a21edf-62ec-4d77-acca-24197b95e971",
  "portfolio-04.jpg": "https://www.figma.com/api/mcp/asset/d95c083c-2941-4920-ae85-8f4606e1a77f",
  "portfolio-05.jpg": "https://www.figma.com/api/mcp/asset/9b1b5a1a-978c-48b7-8c8e-fb0d85215941",
  "portfolio-06.jpg": "https://www.figma.com/api/mcp/asset/50138a3e-3c35-47b4-9873-3bad7018bf2b",
  "portfolio-07.jpg": "https://www.figma.com/api/mcp/asset/cba44fba-b213-4702-9d23-4654e382f567",
  "portfolio-08.jpg": "https://www.figma.com/api/mcp/asset/e3cd208d-3724-407f-86b3-4132cab254b4",
  "portfolio-09.jpg": "https://www.figma.com/api/mcp/asset/ff21ef9d-febd-473d-905d-7eaf91a00186",
  "portfolio-10.jpg": "https://www.figma.com/api/mcp/asset/e9566fb7-1953-4b8d-adda-251979c2389b",
  "portfolio-11.jpg": "https://www.figma.com/api/mcp/asset/59aa9cf7-d79f-41ba-a0c2-1ccceb849759",
  "portfolio-12.jpg": "https://www.figma.com/api/mcp/asset/4b245fdc-d8d2-49aa-9303-7e78872963ce",
  "portfolio-13.jpg": "https://www.figma.com/api/mcp/asset/e7c0e848-f966-446a-8d1b-69c33dc6a5a8",
  "portfolio-feature.jpg": "https://www.figma.com/api/mcp/asset/be49f66d-de38-4a99-bc98-fc524d9d4ccb",
  "portfolio-gallery-hero.jpg": "https://www.figma.com/api/mcp/asset/74196831-c477-423c-8166-da074c214407",
  "services-bg.jpg": "https://www.figma.com/api/mcp/asset/b153636b-a8f9-48b4-870d-02911e04d1b9",
  "services-watermark.png": "https://www.figma.com/api/mcp/asset/1bc9dda5-a348-4130-9577-1c42a277c3ed",
  "services-green.jpg": "https://www.figma.com/api/mcp/asset/482cc2e5-2aef-420b-852b-c241d7f687c5",
  "services-gold.jpg": "https://www.figma.com/api/mcp/asset/f041e50d-b7b3-46a1-8425-b9ebb9dc6b0a",
  "book-hero-overlay.png": "https://www.figma.com/api/mcp/asset/d5e98dfd-e0a2-41c0-af5a-27f5489635a2",
  "book-watermark.png": "https://www.figma.com/api/mcp/asset/45fabec8-120e-467f-80da-98f42a1202ad",
  "book-fabricated.jpg": "https://www.figma.com/api/mcp/asset/f256f6d9-9086-413c-939d-c80b4b321783",
  "book-newborn.jpg": "https://www.figma.com/api/mcp/asset/4bfd015e-eb08-4dee-a1f9-0771bd32cb11",
};

fs.mkdirSync(outDir, { recursive: true });

async function download(name, url) {
  const dest = path.join(outDir, name);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
    console.log(`skip ${name}`);
    return;
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${name}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  console.log(`saved ${name} (${buf.length} bytes)`);
}

for (const [name, url] of Object.entries(images)) {
  try {
    await download(name, url);
  } catch (e) {
    console.error(e.message);
  }
}
