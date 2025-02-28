import Animations from './props.animations.js'
import Sizes from './props.sizes.js'
import Colors from './props.colors.js'
import ColorsHSL from './props.colors-hsl.js'
import Fonts from './props.fonts.js'
import Borders from './props.borders.js'
import Aspects from './props.aspects.js'
import Easings from './props.easing.js'
import Gradients from './props.gradients.js'
import Shadows from './props.shadows.js'
import SVG from './props.svg.js'
import Zindex from './props.zindex.js'

const camelize = text => {
  text = text.replace(/[-]+(.)?/g, (_, c) => c 
    ? c.toUpperCase() 
    : '')
  return text.substr(0, 1).toLowerCase() + text.substr(1)
}

/**
 * @template T
 * @param {T} props
 * @returns {import("type-fest").CamelCasedPropertiesDeep<T> & import("type-fest").KebabCase<T>}
 */
const keysToCamelCase = (props) => {
  for (var prop in props)
    props[camelize(prop)] = props[prop]
  return props
}

const OpenProps = keysToCamelCase({
  ...Animations,
  ...Sizes,
  ...Colors,
  ...ColorsHSL,
  ...Fonts,
  ...Borders,
  ...Aspects,
  ...Easings,
  ...SVG,
  ...Gradients,
  ...Shadows,
  ...Zindex,
})

export default OpenProps