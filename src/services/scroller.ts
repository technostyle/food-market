import { getScrollerProductsUrl } from 'utils/url'
// import { SCROLLER_PRODUCTS_URL } from 'global-constants'

// TODO: utils
const parseFetchReponse = async (response: any) => {
    try {
        return await response.json()
    } catch (e) {
        console.error('response parse error', e)
    }

    return {}
}

class ScrollerService {
    constructor() {}

    async getProducts({ category, page }: { category: string; page: number }) {
        try {
            const getProductsUrl = getScrollerProductsUrl(category, page)
            const response = await fetch(getProductsUrl)
            if (!response.ok) {
                throw new Error('response not ok error')
            }

            const parsedResponse = await parseFetchReponse(response)
            const { data } = parsedResponse
            return data
        } catch (e) {
            console.error('scroller fetch error', e)
        }

        return []
    }
}

export const service = new ScrollerService()
