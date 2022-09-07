const useNumberFormat = (num)=>{
    
  const formatter = new Intl.NumberFormat('de-DE')
  return formatter.format(num)
}

export default useNumberFormat