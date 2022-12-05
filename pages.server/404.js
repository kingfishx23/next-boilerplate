import { initProps } from './_init'

export const getStaticProps = async (ctx) => {
  const boilerplate = await initProps(ctx, '404')
  let response = { ...boilerplate }

  return response
}
