import { Percent } from '@pancakeswap-libs/sdk'
import { ALLOWED_PRICE_IMPACT_HIGH, PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN } from '../../constants'

/**
 * Given the price impact, get user confirmation.
 *
 * @param priceImpactWithoutFee price impact of the trade without the fee.
 */
export default function confirmPriceImpactWithoutFee(priceImpactWithoutFee: Percent): boolean {
  if (!priceImpactWithoutFee.lessThan(PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN)) {
    return (
      window.prompt(
        `Swap ini setidaknya memiliki dampak harga ${PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN.toFixed(
          0
        )}%. Ketik kata "Reza" untuk melanjutkan pertukaran ini.`
      ) === 'Reza'
    )
  } if (!priceImpactWithoutFee.lessThan(ALLOWED_PRICE_IMPACT_HIGH)) {
    return window.confirm(
      `Swap ini setidaknya memiliki dampak harga ${ALLOWED_PRICE_IMPACT_HIGH.toFixed(
        0
      )}%. Harap konfirmasikan bahwa Anda ingin melanjutkan pertukaran ini.`
    )
  }
  return true
}
