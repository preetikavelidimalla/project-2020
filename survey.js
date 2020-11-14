var score;
var ans1=document.getElementsByName("time_for_bath");
var ans2=document.getElementsByName("freq_bath");
var ans3=document.getElementsByName("faucets_time");
var ans4=document.getElementsByName("yes_no");
var ans5=document.getElementsByName("water_recycle");
var ans6=document.getElementsByName("low-flow-faucets");
var ans7=document.getElementsByName("concern");
var ans8=document.getElementsByName("elec");


var ans1_value, ans2_value, ans7_value, ans3_value, ans4_value, ans5_value, ans6_value, ans8_value;

function find_score(){
    for(i=0;i<ans1.length;i=i+1)
    {
        if(ans1[i].checked)
        {
           ans1_value=ans1[i].value;
        }
    }
   for(i=0;i<ans2.length;i=i+1)
    {
        if(ans2[i].checked)
        {
           ans2_value=ans2[i].value;
        }
    }
    for(i=0;i<ans3.length;i=i+1)
    {
        if(ans3[i].checked)
        {
           ans3_value=ans3[i].value;
        }
    }
    for(i=0;i<ans4.length;i=i+1)
    {
        if(ans4[i].checked)
        {
           ans4_value=ans4[i].value;
        }
    }
    for(i=0;i<ans5.length;i=i+1)
    {
        if(ans5[i].checked)
        {
           ans5_value=ans5[i].value;
        }
    }
    for(i=0;i<ans6.length;i=i+1)
    {
        if(ans6[i].checked)
        {
           ans6_value=ans6[i].value;
        }
    }
    for(i=0;i<ans7.length;i=i+1)
    {
        if(ans7[i].checked)
        {
           ans7_value=ans7[i].value;
        }
    }
    for(i=0;i<ans8.length;i=i+1)
    {
        if(ans8[i].checked)
        {
           ans8_value=ans8[i].value;
        }
    }
    if(ans1_value=='<5')score=score+7;    
    else if(ans1_value== "5-10 min")score+=10;
    else if(ans1_value=="10-20 min")score+=4;
    
            
    
    if(ans2_value=='once')score+=10;      
    else if(ans2_value=='twice') score+=5;
    
        
        
    if(ans3_value=='<5 min')score+=3;
    else if(ans3_value=='10-20 min')score+=10;
    else if(ans3_value== 'approx 30 min' ) score+=7;
    
        
    if(ans4_value=="yes") score+=10;
    
    if(ans5_value=="Recycled regularly ") score+=10;

    if(ans6_value=="Yes")score+=10;

    if(ans7_value=="very good")score+=10;
    else if(ans7_value=="not so good")score+=5;


    if(ans8_value==">40000 KWH")score+=0;
    else if(ans8_value=="<20000 KWH")score+=8;
    else if(ans8_value=="20000-30000 KWH") score+=10;
    
alert(score);
}
