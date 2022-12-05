import axios from 'axios'
import cycle from 'cycle'

const appName = `abainvest-public-website: `
const url = `${process.env.NEXT_PUBLIC_PUBLICWEBSITE_URL}/api/telemetry/log`

export const logger = (MODULE) => ({
  info: async (msg, meta) => {
    try {
      return await axios.post(url, {
        type: 'info',
        MODULE,
        msg: appName + msg,
        meta:
          typeof meta === 'object' ? JSON.stringify(cycle.decycle(meta)) : '',
      })
    } catch (err) {
      console.log(err)
    }
  },
  warn: async (msg, meta) => {
    try {
      return await axios.post(url, {
        type: 'warn',
        MODULE,
        msg: appName + msg,
        meta:
          typeof meta === 'object' ? JSON.stringify(cycle.decycle(meta)) : '',
      })
    } catch (err) {
      console.log(err)
    }
  },
  error: async (msg, meta) => {
    try {
      return await axios.post(url, {
        type: 'error',
        MODULE,
        msg: appName + msg,
        meta:
          typeof meta === 'object' ? JSON.stringify(cycle.decycle(meta)) : '',
      })
    } catch (err) {
      console.log(err)
    }
  },
})
