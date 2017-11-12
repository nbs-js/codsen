import isNumeric from 'is-numeric'

const currencySigns = ['د.إ', '؋', 'L', '֏', 'ƒ', 'Kz', '$', 'ƒ', '₼', 'KM', '৳', 'лв', '.د.ب', 'FBu', '$b', 'R$', '฿', 'Nu.', 'P', 'p.', 'BZ$', 'FC', 'CHF', '¥', '₡', '₱', 'Kč', 'Fdj', 'kr', 'RD$', 'دج', 'kr', 'Nfk', 'Br', 'Ξ', '€', '₾', '₵', 'GH₵', 'D', 'FG', 'Q', 'L', 'kn', 'G', 'Ft', 'Rp', '₪', '₹', 'ع.د', '﷼', 'kr', 'J$', 'JD', '¥', 'KSh', 'лв', '៛', 'CF', '₩', '₩', 'KD', 'лв', '₭', '₨', 'M', 'Ł', 'Lt', 'Ls', 'LD', 'MAD', 'lei', 'Ar', 'ден', 'K', '₮', 'MOP$', 'UM', '₨', 'Rf', 'MK', 'RM', 'MT', '₦', 'C$', 'kr', '₨', '﷼', 'B/.', 'S/.', 'K', '₱', '₨', 'zł', 'Gs', '﷼', '￥', 'lei', 'Дин.', '₽', 'R₣', '﷼', '₨', 'ج.س.', 'kr', '£', 'Le', 'S', 'Db', 'E', '฿', 'SM', 'T', 'د.ت', 'T$', '₤', '₺', 'TT$', 'NT$', 'TSh', '₴', 'USh', '$U', 'лв', 'Bs', '₫', 'VT', 'WS$', 'FCFA', 'Ƀ', 'CFA', '₣', '﷼', 'R', 'Z$']

function findtype(something) {
  if (typeof something !== 'string') {
    throw new Error(`csv-sort/util/findtype(): input must be string! Currently it's: ${typeof something}`)
  }
  if (isNumeric(something)) {
    return 'numeric'
  } else if (currencySigns.some(singleSign =>
    // We remove all known currency symbols one by one from this input string.
    // If at least one passes as numeric after the currency symbol-removing, it's numeric.
    isNumeric(something.replace(singleSign, '').replace(/[,.]/g, '')))) {
    return 'numeric'
  } else if (something.trim().length === 0) {
    return 'empty'
  }
  return 'text'
}

export { findtype as default }
