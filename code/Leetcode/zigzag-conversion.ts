function convert(s: string, numRows: number): string {
  
    if (numRows === 1) return s
  
    let buckets = [] as Array<string>
    for (let i = 0; i < numRows; i++) {
      buckets[i] = ''
    }
    let currentBucket = 0
    let goingDown = false
    
    for (let i = 0; i < s.length; i++) {
      buckets[currentBucket] += s[i]
      if (currentBucket == 0 || currentBucket == numRows - 1) goingDown = !goingDown;
      currentBucket += goingDown ? 1 : -1;
      
    }
    
    let result = ''
    for (let i = 0; i < numRows; i++) {
      result += buckets[i]
    }
    
    return result
  };