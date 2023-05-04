const debounce = <F extends (...args: any[]) => void>(
    func: F,
    delay: number,
  ) => {
    let timeoutId: NodeJS.Timeout;
  
    return (...args: Parameters<F>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  export default debounce