import { BARCODE, SLIDER, SLIDER_POWER, CYCLE_BATCH, OTHER_BATCH } from './types'

export const setBarcode = (val) => (
    {
        type: BARCODE,
        val: val
    }
)
export const setSilder = (val) => (
    {
        type: SLIDER,
        val: val
    }
)
export const setSilderPower = (val) => (
    {
        type: SLIDER_POWER,
        val: val
    }
)

export const setCycleBatch = (val) => (
    {
        type: CYCLE_BATCH,
        val: val
    }
)

export const setOtherBatch = (val) => (
    {
        type: OTHER_BATCH,
        val: val
    }
)
