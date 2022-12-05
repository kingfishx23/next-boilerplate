import axios from 'axios'
import compressimg from 'browser-image-compression'
import cloneDeep from 'lodash.clonedeep'
import isEmpty from 'lodash.isempty'

/**
 * Upload files with compress options
 * @param {Object} props - upload properties
 * @property {String} folder - folder path in s3
 * @property {String} file - file or blob object
 * @property {Object} options - can contain compressOptions
 */
export const uploadFile = async (props) => {
  try {
    // Deep clone so file can be manipulated
    let input = cloneDeep(props)

    // Compress before continuing, if provided compressOptions
    if (!isEmpty(input.options.compressOptions)) {
      const temp = await compressimg(input.file, input.options.compressOptions)
      input.file = temp
			console.log(temp)
    }

    // Get signed URL. Why: storing secret in client side is dangerous. better to use this approach so client only use temporary url that expires in 10mins to upload
    const res = await axios.request({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_PUBLICWEBSITE_URL}/api/files/getS3post`,
      params: {
        folder: input.folder,
        fileName: input.file.name,
        unique: input.options.unique
      },
    })
    const { url, fields, key } = res?.data

    // Map the object keys and the file object to form data so it can upload.
    var formData = new FormData()
    Object.entries({ ...fields, file: input.file }).forEach(([key, value]) => {
      formData.append(key, value)
    })

    // Upload the file
    const upload = await fetch(url, {
      method: 'POST',
      body: formData,
    })

    return { ok: upload.ok, key }
  } catch (err) {
    console.log(err)
    throw err
  }
}
