var score;
var ans=document.getElementsByTagName('input')
var ans1_value,ans2_value,ans3_value,ans4_value,ans5_value,ans6_value,ans7_value,ans8_value;
var p1,p2,p3,p4,p5,p6,p7,p8;
function find_score(){
    for(i=0;i<ans.length;i=i+1)
    {if(ans[i].type="radio"){
        if(ans[i].checked)
        {
            if(ans[i].name=="time_for_bath")
            ans1_value=ans[i].value;            
            else if(ans[i].name=="freq_bath")
            ans2_value=ans[i].value;
            else if(ans[i].name=="faucets_time")
            ans3_value=ans[i].value;
            else if(ans[i].name=="yes_no" )
            ans4_value=ans[i].value;
            else if(ans[i].name=="water_recycle")
            ans5_value=ans[i].value;
            else if(ans[i].name=="low-flow-faucets")
            ans6_value=ans[i].value;
            else if(ans[i].name=="concern")
            ans7_value=ans[i].value;
            else if(ans[i].name=="elec")
            ans8_value=ans[i].value;
        }
        
    }}
    if(ans1_value=="<5")p1=p1+7;    
    else if(ans1_value== "5-10 min")p1+=10;
    else if(ans1_value=="10-20 min")p1+=4;
                
    
    if(ans2_value=='once')p2+=10;      
    else if(ans2_value=='twice') p2+=5;
            
        
    if(ans3_value=='<5 min')p3+=3;
    else if(ans3_value=='10-20 min')p3+=10;
    else if(ans3_value== 'approx 30 min' ) p3+=7;
    
        
    if(ans4_value=="yes") p4+=10;
    
    if(ans5_value=="Recycled regularly ") p5+=10;

    if(ans6_value=="Yes")p6+=10;

    if(ans7_value=="very good")p7+=10;
    else if(ans7_value=="not so good")p7+=5;


    if(ans8_value==">40000 KWH")p8+=0;
    else if(ans8_value=="<20000 KWH")p8+=8;
    else if(ans8_value=="20000-30000 KWH")p8+=10;
    
    score=p1+p2+p3+p4+p5+p6+p7+p8;
   
}
