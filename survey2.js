var score;
var ans=document.getElementsByTagName('input')
var ans1_value,ans2_value,ans3_value,ans4_value,ans5_value,ans6_value,ans7_value,ans8_value;
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

}
