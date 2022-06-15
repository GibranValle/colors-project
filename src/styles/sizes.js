/**
 * 320px — 480px: Mobile devices
481px — 768px: iPads, Tablets
769px — 1024px: Small screens, laptops
1025px — 1200px: Desktops, large screens
 */

export default {
  up() {},
  down(size) {
    const sizes = {
      xs: '480px',
      sm: '768px',
      md: '1024px',
      lg: '1200px',
    }
    return `@media (max-width: ${sizes[size]})`
  }
}