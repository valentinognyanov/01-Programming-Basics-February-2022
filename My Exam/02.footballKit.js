function footballKit(input){
    let tshirtPrice = Number(input[0]);
    let sumToReach = Number(input[1]);

    let shortsPrice = tshirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.2;
    let bootsPrice = (tshirtPrice + shortsPrice) * 2;
    
    let sumWithoutDisscount = tshirtPrice + shortsPrice + socksPrice + bootsPrice;
    let totalSum = sumWithoutDisscount * 0.85;

    if(totalSum >= sumToReach){
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${totalSum.toFixed(2)} lv.`);
    } else {
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${(sumToReach - totalSum).toFixed(2)} lv. more.`);
    }
}
footballKit(["25", "100"])