class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length) return false;

         const obj: Record<string, number> = {};

         for(const ch of s){
            obj[ch] = (obj[ch] || 0) + 1;
         }

         for(const ch of t){
            obj[ch] = obj[ch] - 1;
         }

         for(const ch of s){
            if(obj[ch] != 0) return false;
         }
         return true;
    }
}

/**
 *  

      const ss: string[] = [...s].sort();
      const tt: string[] = [...t].sort();  

      let n: number = 0;
      while(n < s.length){
        if(ss[n] != tt[n]) return false;
        n++;
      }

      return true;
 */