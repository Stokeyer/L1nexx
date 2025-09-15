import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeImages() {
  const inputDir = path.join(__dirname, '../src/components/assets');
  const outputDir = path.join(__dirname, '../src/components/assets/optimized');
  
  // Создаем папку для оптимизированных изображений
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Оптимизируем аватар
  const avatarPath = path.join(inputDir, 'cover/avatar.webp');
  const optimizedAvatarPath = path.join(outputDir, 'avatar-optimized.webp');
  
  if (fs.existsSync(avatarPath)) {
    try {
      await sharp(avatarPath)
        .resize(200, 200, {
          fit: 'cover',
          position: 'center'
        })
        .webp({
          quality: 80,
          effort: 6
        })
        .toFile(optimizedAvatarPath);
      
      const originalSize = fs.statSync(avatarPath).size;
      const optimizedSize = fs.statSync(optimizedAvatarPath).size;
      
      console.log(`✅ Аватар оптимизирован:`);
      console.log(`   Оригинал: ${(originalSize / 1024).toFixed(2)} KiB`);
      console.log(`   Оптимизирован: ${(optimizedSize / 1024).toFixed(2)} KiB`);
      console.log(`   Экономия: ${((originalSize - optimizedSize) / 1024).toFixed(2)} KiB (${(((originalSize - optimizedSize) / originalSize) * 100).toFixed(1)}%)`);
      
    } catch (error) {
      console.error('Ошибка при оптимизации аватара:', error);
    }
  }

  // Создаем также версию в AVIF формате для лучшего сжатия
  const avatarAvifPath = path.join(outputDir, 'avatar-optimized.avif');
  
  if (fs.existsSync(avatarPath)) {
    try {
      await sharp(avatarPath)
        .resize(200, 200, {
          fit: 'cover',
          position: 'center'
        })
        .avif({
          quality: 70
        })
        .toFile(avatarAvifPath);
      
      const originalSize = fs.statSync(avatarPath).size;
      const avifSize = fs.statSync(avatarAvifPath).size;
      
      console.log(`✅ Аватар в AVIF формате:`);
      console.log(`   Оригинал: ${(originalSize / 1024).toFixed(2)} KiB`);
      console.log(`   AVIF: ${(avifSize / 1024).toFixed(2)} KiB`);
      console.log(`   Экономия: ${((originalSize - avifSize) / 1024).toFixed(2)} KiB (${(((originalSize - avifSize) / originalSize) * 100).toFixed(1)}%)`);
      
    } catch (error) {
      console.error('Ошибка при создании AVIF версии:', error);
    }
  }
}

optimizeImages().catch(console.error);
