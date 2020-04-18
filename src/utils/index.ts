import { get } from 'lodash'

export const prop = (name: any, defaultValue?: any) => (obj: Object) =>
    get(obj, name, defaultValue)
