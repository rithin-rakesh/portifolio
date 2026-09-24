import React, { useEffect, useState } from 'react';

export default function TransparentLogo({ src, alt, className = '', lightenDarkText = false }) {
  const [processedSrc, setProcessedSrc] = useState(src);

  useEffect(() => {
    if (!src) return;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.drawImage(img, 0, 0);

        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Threshold for white or light grey background
          const minVal = Math.min(r, g, b);
          const maxVal = Math.max(r, g, b);

          if (minVal > 215) {
            // White or near-white background -> Make 100% transparent
            data[i + 3] = 0;
          } else if (minVal > 195 && maxVal - minVal < 25) {
            // Soft anti-aliased edge smoothing
            data[i + 3] = Math.round((215 - minVal) * 6);
          } else if (lightenDarkText) {
            // For dark text that would vanish on a black theme (e.g. SRM black subtitle)
            // Brighten dark pixels (R,G,B < 60) to a clean, crisp silver-white
            if (r < 65 && g < 65 && b < 65) {
              data[i] = 230;
              data[i + 1] = 235;
              data[i + 2] = 245;
            }
          }
        }

        ctx.putImageData(imgData, 0, 0);
        setProcessedSrc(canvas.toDataURL('image/png'));
      } catch (err) {
        // Fallback to original
        setProcessedSrc(src);
      }
    };
  }, [src, lightenDarkText]);

  return (
    <img 
      src={processedSrc} 
      alt={alt} 
      className={className} 
    />
  );
}
