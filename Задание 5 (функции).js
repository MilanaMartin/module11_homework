var func = (x,n)=>{ 
  let rez=x;
  
  if(x===0)return 1;
  if(x===1)return x;
    
  for(let i=2; i <= n; i++)
    {
      rez *=i;
    }
  return rez;
};
console.log(func(2,2));