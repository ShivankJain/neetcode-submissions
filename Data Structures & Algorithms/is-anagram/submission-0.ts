class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
      if(s.length != t.length) return false;

      const ss: string[] = [...s].sort();
      const tt: string[] = [...t].sort();  

      let n: number = 0;
      while(n <= s.length){
        if(ss[n] != tt[n]) return false;
        n++;
      }

      return true;
    }
}
