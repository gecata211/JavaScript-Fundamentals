function NextDay(y, m, d){
  y = Number(y);
  m = Number(m);
  d = Number(d);
  d = d + 1; 
  if (y < 100) {
    y += 1900;
  }
  if((m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) && (d > 31)){
    m++;
    d = 1; 
  }
  if((m == 4 || m == 6 || m == 9 || m == 11) && (d > 30)){
    m++;
    d = 1;
  }
  if(m == 2 && y % 4 == 0 && d > 29){
    m++;
    d = 1;
  }
  if(m == 2 && y % 4 != 0 && d > 28){
    m++;
    d = 1;
  }
  if(m > 12){
    y++;
  }
  console.log(y + "-" + m + "-" + d);
}
NextDay ('1', '1', '1');
NextDay ('2020', '2', '29');
NextDay ('2002', '2', '28');
