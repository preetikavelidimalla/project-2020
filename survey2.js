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
    
    score=(parseInt(ans1_value) + parseInt(ans2_value) + parseInt(ans3_value) + parseInt(ans4_value) + parseInt(ans5_value) + parseInt(ans6_value) + parseInt(ans7_value) + parseInt(ans8_value))*100/80;
    document.getElementById('result').innerHTML=score;

    if(parseInt(ans1_value)<5)
    {
        document.getElementById('q1').innerHTML="Try shaving atleast three minutes off your shower to help reduce your water usage. Delivering, treating, and heating the hot water for your shower is pretty energy intensive.";
    }
    if(parseInt(ans2_value)<5)
    {
        document.getElementById('q2').innerHTML="Washing removes healthy oil and bacteria from your skin, so bathing too often could cause dry, itchy skin and allow bad bacteria to enter through cracked skin. So if your answer is more than once to the question (unless you've burnt calories vigorosly), YOU are wasting water! Lots of it. Try to educate other people too! ";
    }
    if(parseInt(ans3_value)<5)
    {
        document.getElementById('q3').innerHTML="On average, a faucet can use anywhere between 1-3 gallons per minute. This changes depending on other factors. On average, each person uses about 80-100 gallons of water per day, for indoor chores. You can do the math to find out where faucets are being used unnnecessarily and cut it short. Optimum period would be within 30 minutes. "
    }
    if(parseInt(ans4_value)==0)
    {
        document.getElementById("q4").innerHTML="Got nothing to say. Get them repaired even if it is a small leak!"
    }
    if(parseInt(ans5_value)==0)
    {
        document.getElementById('q5').innerHTML="Try to implement water recycling techniques as much as possible. Can not impress the importance further."
    }
    if(parseInt(ans6_value)==0)
    {
        document.getElementById('q6').innerHTML="With technological advanceents and concern towards water conservation, low-flow faucets are highly recommended because of the less water flow rate and economically viable. If not yet, start today."
    }
    if(parseInt(ans7_value)<10)
    {
        document.getElementById('q7').innerHTML="There are many recycling/storing opportunities available now-a-days. Try to implement them as a community."
    }
    if(parseInt(ans8_value)<5)
    {
        document.getElementById('q8').innerHTML="Average energy consumed per household in India is 90 units(KWH) per month(including all the factors). So consumption depending on weather, subsidies etc in the range of 100-200 would be optimum according to the statistics."
    }

    
}
