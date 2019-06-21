//I am not sure if I have taken the right approach to Jasmine testing, but here's what I have done:
// I have taken the functions that deal with user interactions and created some jasmine tests.
// I have removed any code that takes values from the DOM or adds information to the DOM
// The values being tested are passed in from calcSpec
// I have based the test around being able to return the correct Markers and Location names only 
// I am testing only my own javascript code - I'm not testing dc/d3 or maps (I don't know how to do that)


describe("Test Main Heading Links", function() {

    it("Lodgings should return ACGILNPQ_Hotel Verde, Cape Town,Quayside Hotel, Simonstown,Elephant Park Lodge, Knysna,Milkwood Manor, Plettenburg Bay,Spekboom Tented Camp, Addo Elephant Park,Lower Sabie Rest Camp, Kruger National Park,Glen Afric Lodge, Glen Afric Park,Protea Hotel by Marriott, Roodepoort", function() {
        expect(showSelection("Lodgings")).toBe("ACGILNPQ_Hotel Verde, Cape Town,Quayside Hotel, Simonstown,Elephant Park Lodge, Knysna,Milkwood Manor, Plettenburg Bay,Spekboom Tented Camp, Addo Elephant Park,Lower Sabie Rest Camp, Kruger National Park,Glen Afric Lodge, Glen Afric Park,Protea Hotel by Marriott, Roodepoort");
    });
    it("Safari should return GMOPRSTV_Elephant Park, Knysna,Elephant National Park, Addo,Kruger National Park, South Africa,Glen Afric Park, South Africa,Lion and Safari Park, Hartbeespoort,de Wildt Cheetah Sanctuary,Zulu Nyala Country Manor, Hluhluwe,Ukutula Lodge and Game Reserve, Farm Klipkop", function() {
        expect(showSelection("Safari")).toBe("GMOPRSTV_Elephant Park, Knysna,Elephant National Park, Addo,Kruger National Park, South Africa,Glen Afric Park, South Africa,Lion and Safari Park, Hartbeespoort,de Wildt Cheetah Sanctuary,Zulu Nyala Country Manor, Hluhluwe,Ukutula Lodge and Game Reserve, Farm Klipkop");
    });
    it("Sightseeing should return BDEFHJKPU_Chapman's Peak, Cape Peninsula,Cape of Good Hope, Cape Peninsula,Stellenbosch, Western Cape,Marianne Wine Estate, Stellenbosch,Plettenburg Bay, Western Cape,Nature's Valley, Southern Cape,Port Elizabeth, Eastern CapeJohannesburg, Gauteng", function() {
        expect(showSelection("Sightseeing")).toBe("BDEFHJKPU_Chapman's Peak, Cape Peninsula,Cape of Good Hope, Cape Peninsula,Stellenbosch, Western Cape,Marianne Wine Estate, Stellenbosch,Plettenburg Bay, Western Cape,Nature's Valley, Southern Cape,Port Elizabeth, Eastern Cape,Johannesburg, Gauteng");
    });
    it("If not Lodgings, Safari, or Sightseeing return an error - although in reality there wont be an error.", function() {
        spyOn(window, "alert");
        showSelection("Swimming");
        expect(window.alert).toHaveBeenCalledWith("Error! - Must be Lodgings, Safari, or Sight Seeing.");
    });
});



describe("Test the Lodgings Filter Piechart", function() {

    it("Lodgings, _0 should return ACIQ_Hotel Verde, Cape Town,Quayside Hotel,Simonstown, Milkwood Manor, Plettenburg Bay, Protea Hotel by Marriott, Roodepoort", function() {
        expect(showLodgingsFilter(["_0"])).toBe("ACIQ_Hotel Verde, Cape Town,Quayside Hotel, Simonstown,Milkwood Manor, Plettenburg Bay,Protea Hotel by Marriott, Roodepoort");
    });
    it("Lodgings, _1 should return GP_Elephant Park Lodge, Knysna,Glen Afric Lodge, Glen Afric Park", function() {
        expect(showLodgingsFilter(["_1"])).toBe("GP_Elephant Park Lodge, Knysna,Glen Afric Lodge, Glen Afric Park");
    });
    it("Lodgings, _2 should return LN_Spekboom Tented Camp, Addo Elephant Park,Lower Sabie Rest Camp, Kruger National Park", function() {
        expect(showLodgingsFilter(["_2"])).toBe("LN_Spekboom Tented Camp, Addo Elephant Park,Lower Sabie Rest Camp, Kruger National Park");
    });
    it("Lodgings, [] should return ACIQGPLN_Hotel Verde, Cape Town,Quayside Hotel,Simonstown, Milkwood Manor, Plettenburg Bay, Protea Hotel by Marriott, Roodepoort, Elephant Park Lodge, Knysna,Glen Afric Lodge, Glen Afric Park Spekboom Tented Camp, Addo Elephant Park,Lower Sabie Rest Camp, Kruger National Park", function() {
        expect(showLodgingsFilter([])).toBe("ACIQGPLN_Hotel Verde, Cape Town,Quayside Hotel, Simonstown,Milkwood Manor, Plettenburg Bay,Protea Hotel by Marriott, Roodepoort,Elephant Park Lodge, Knysna,Glen Afric Lodge, Glen Afric Park,Spekboom Tented Camp, Addo Elephant Park,Lower Sabie Rest Camp, Kruger National Park");
    });
});

describe("Test the Safari Filter Piechart", function() {

    it("Safari, _0 should return OPT_Kruger National Park, South Africa,Glen Afric Park, South Africa,Zulu Nyala Country Manor, Hluhluwe", function() {
        expect(showSafariFilter(["_0"])).toBe("OPT_Kruger National Park, South Africa,Glen Afric Park, South Africa,Zulu Nyala Country Manor, Hluhluwe");
    });
    
    it("Safari, _1 should return GM_Elephant Park, Knysna,Elephant National Park, Addo", function() {
        expect(showSafariFilter(["_1"])).toBe("GM_Elephant Park, Knysna,Elephant National Park, Addo");
    });
    
    it("Safari, _2 should return RV_Lion and Safari Park, Hartbeespoort,Ukutula Lodge and Game Reserve, Farm Klipkop", function() {
        expect(showSafariFilter(["_2"])).toBe("RV_Lion and Safari Park, Hartbeespoort,Ukutula Lodge and Game Reserve, Farm Klipkop");
    });
    it("Safari, _3 should return S_de Wildt Cheetah Sanctuary", function() {
        expect(showSafariFilter(["_3"])).toBe("S_de Wildt Cheetah Sanctuary");
    });
    it("Safari, [] should return OPTGMRVS_Kruger National Park, South Africa,Glen Afric Park, South Africa,Zulu Nyala Country Manor, Hluhluwe,Elephant Park, Knysna,Elephant National Park, Addo,Lion and Safari Park, Hartbeespoort,Ukutula Lodge and Game Reserve, Farm Klipkop,de Wildt Cheetah Sanctuary", function() {
        expect(showSafariFilter([])).toBe("OPTGMRVS_Kruger National Park, South Africa,Glen Afric Park, South Africa,Zulu Nyala Country Manor, Hluhluwe,Elephant Park, Knysna,Elephant National Park, Addo,Lion and Safari Park, Hartbeespoort,Ukutula Lodge and Game Reserve, Farm Klipkop,de Wildt Cheetah Sanctuary");
    });
});

describe("Test the Sight Seeing Filter Piechart", function() {
    it("Sight Seeing, _0 should return EKU_Stellenbosch, Western Cape,Port Elizabeth, Eastern Cape,Johannesburg, Gauteng", function() {
        expect(showSightSeeingFilter(["_0"])).toBe("EKU_Stellenbosch, Western Cape,Port Elizabeth, Eastern Cape,Johannesburg, Gauteng");
    });
    
    it("Sight Seeing, _1 should return BDJ_Chapman's Peak, Cape Peninsula,Cape of Good Hope, Cape Peninsula,Nature's Valley, Southern Cape", function() {
        expect(showSightSeeingFilter(["_1"])).toBe("BDJ_Chapman's Peak, Cape Peninsula,Cape of Good Hope, Cape Peninsula,Nature's Valley, Southern Cape");
    });
    
    it("Sight Seeing, _2 should return H_Plettenburg Bay, Western Cape", function() {
        expect(showSightSeeingFilter(["_2"])).toBe("H_Plettenburg Bay, Western Cape");
    });
    it("Sight Seeing, _3 should return F_Marianne Wine Estate, Stellenbosch", function() {
        expect(showSightSeeingFilter(["_3"])).toBe("F_Marianne Wine Estate, Stellenbosch");
    });
    it("Sight Seeing, [] should return OPTGMRVS_Kruger National Park, South Africa,Glen Afric Park, South Africa,Zulu Nyala Country Manor, Hluhluwe,Elephant Park, Knysna,Elephant National Park, Addo,Lion and Safari Park, Hartbeespoort,Ukutula Lodge and Game Reserve, Farm Klipkop,de Wildt Cheetah Sanctuary", function() {
        expect(showSightSeeingFilter([])).toBe("EKUBDJHF_Stellenbosch, Western Cape,Port Elizabeth, Eastern Cape,Johannesburg, Gauteng,Chapman's Peak, Cape Peninsula,Cape of Good Hope, Cape Peninsula,Nature's Valley, Southern Cape,Plettenburg Bay, Western Cape,Marianne Wine Estate, Stellenbosch");
    });
});




