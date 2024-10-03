const BEZEL_RATIO = 0.125
const MARGIN_RATIO = BEZEL_RATIO / 2.2

const imageOverlay = document.getElementById("image-overlay")
const tvContainer = document.getElementById("tv")
const screen = document.getElementById("screen")
const content = document.getElementById("content")

const calculateHeightForAspectRatio = (width, aspectRatioX, aspectRatioY) => (aspectRatioY * width) / aspectRatioX

const resizeScreen = () => {
  if (tvContainer && imageOverlay && screen && content) {
    const imageOverlayBoundingBox = imageOverlay.getBoundingClientRect()

    const screenWidth = Math.floor(imageOverlayBoundingBox.width)
    const screenHeight = Math.floor(calculateHeightForAspectRatio(imageOverlayBoundingBox.width, 4, 3.2))
    const paddingX = Math.floor(screenWidth * BEZEL_RATIO)
    const paddingY = Math.floor(screenHeight * BEZEL_RATIO)

    const innerWidth = `${Math.floor(screenWidth - (2 * screenWidth * MARGIN_RATIO))}`
    const innerHeight = `${Math.floor(screenHeight - (2 * screenHeight * MARGIN_RATIO))}`

    tvContainer.style.height = `${imageOverlayBoundingBox.height}px`

    screen.style.width = `${innerWidth}px`
    screen.style.height = `${innerHeight}px`
    screen.style.marginLeft = `${screenWidth * MARGIN_RATIO}px`
    screen.style.marginRight = `${screenWidth * MARGIN_RATIO}px`
    screen.style.marginTop = `${screenHeight * MARGIN_RATIO}px`

    content.style.width = `${innerWidth - (2 * paddingX)}px`
    content.style.height = `${innerHeight - (2 * paddingY)}px`
    content.style.paddingLeft = `${paddingX}px`
    content.style.paddingRight = `${paddingX}px`
    content.style.paddingTop = `${paddingY}px`
    content.style.paddingBottom = `${paddingY}px`
  }
}

window.addEventListener("resize", resizeScreen)
resizeScreen()

if (content) {
  content.scrollTop = content.scrollHeight
}
