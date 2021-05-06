import {useWindowSize} from './useWindowSize'

const PREVIEW_WIDTH = 200
const COLOR = '#345678'

const styles = {
  preview: (width, height) => ({
    width,
    height,
    position: 'relative',
    border: `2px dashed ${COLOR}`,
  }),
  widthText: (width) => ({
    width,
    position: 'absolute',
    left: 0,
    top: 0,
    color: COLOR,
    textAlign: 'center',
  }),
  heightText: (height) => ({
    height,
    position: 'absolute',
    left: 0,
    top: 0,
    writingMode: 'vertical-lr',
    transform: 'rotate(180deg)',
    textAlign: 'center',
    color: COLOR,
  })
};

const Ch_6 = () => {
  const [screenWidth, screenHeight] = useWindowSize()
  const previewHeight = (PREVIEW_WIDTH * screenHeight) / screenWidth
  return (
    <>
      <h2>UseWindowSize</h2>
      <div style={styles.preview(PREVIEW_WIDTH, previewHeight)}>
        <div style={styles.widthText(PREVIEW_WIDTH)}>{screenWidth}px</div>
        <div style={styles.widthText(previewHeight)}>{screenHeight}px</div>
      </div>
    </>
  )
}

export default Ch_6
