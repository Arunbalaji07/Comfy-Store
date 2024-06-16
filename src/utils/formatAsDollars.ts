export const formatAsDollars = (price: string | null):string => {
    const dollarsAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(Number(price)/100)
    return dollarsAmount
}
