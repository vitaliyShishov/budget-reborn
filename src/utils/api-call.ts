import axios, { AxiosRequestConfig } from 'axios'
import camelcaseKeys from 'camelcase-keys'
import qs from 'qs'

const ARTICLE_PARAMS_TO_POPULATE = {
  populate: {
    section: {
      populate: {
        list: {
          populate: {
            list: {
              populate: '*'
            }
          }
        },
        button: {
          populate: '*'
        },
        quote: {
          populate: '*'
        },
        title: {
          populate: '*'
        },
        paragraph: {
          populate: '*'
        },
        image: {
          populate: '*'
        },
        datestamp: {
          populate: '*'
        },
        separation_line: {
          populate: '*'
        },
        combi_discount_banner: {
          populate: '*'
        },
        cross_sell_block: {
          populate: '*'
        }
      }
    }
  }
}

const request = (config: AxiosRequestConfig, populateParams = false) => {
  const configToPass = { ...config }

  if (populateParams) {
    configToPass.params = { ...config.params, ...ARTICLE_PARAMS_TO_POPULATE }
  }

  return axios({
    ...configToPass,
    paramsSerializer: params => qs.stringify(params, { arrayFormat: 'brackets' }),
    transformResponse: response =>
      camelcaseKeys(JSON.parse(response || '{}'), { deep: true })
  })
    .then(({ data: { data: responseData } }) => responseData)
    .catch(e => console.log(e))
}

export default request
