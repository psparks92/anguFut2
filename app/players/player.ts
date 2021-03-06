

    export interface Headshot
    {
        medImgUrl: string; 
        smallImgUrl: string; 
        largeImgUrl: string; 
    }

    export interface Dark
    {
        small: string; 
        large: string; 
        medium: string; 
    }

    export interface Normal
    {
        small: string; 
        large: string; 
        medium: string; 
    }

    export interface ImageUrls
    {
        dark: Dark; 
        normal: Normal; 
    }

    export interface Club
    {
        abbrName: string; 
        imageUrls: ImageUrls; 
        clubid: number; 
        imgUrl: string; 
        name: string; 
    }

    export interface ImageUrls2
    {
        small: string; 
        large: string; 
        medium: string; 
    }

    export interface Nation
    {
        abbrName: string; 
        imageUrls: ImageUrls2; 
        nationid: number; 
        imgUrl: string; 
        name: string; 
    }

    export interface Attribute
    {
        name: string; 
        value: number; 
        chemistryBonus : number;
    }

    export interface League
    {
        abbrName: string; 
        leagueid: number; 
        imgUrl: string; 
        name: string; 
    }

    export interface IPlayer
    {
        rating: number; 
        itemType: string; 
        weight: number; 
        reactions: number; 
        color: string; 
        gkdiving: number; 
        penalties: number; 
        atkWorkRate: string; 
        height: number; 
        traits: string[];
        isGK: boolean; 
        isSpecialType: boolean; 
        headshot: Headshot; 
        specialities: string[];
        headshotImgUrl: string; 
        quality: string; 
        playerid: number; 
        aggression: number; 
        freekickaccuracy: number; 
        acceleration: number; 
        marking: number; 
        modelName: string; 
        gkreflexes: number; 
        gkhandling: number; 
        headingaccuracy: number; 
        dribbling: number; 
        commonName: string; 
        stamina: number; 
        standingtackle: number; 
        slidingtackle: number; 
        potential: number; 
        gkkicking: number; 
        longpassing: number; 
        shotpower: number; 
        sprintspeed: number; 
        agility: number; 
        playStyle: string; 
        positioning: number; 
        baseId: number; 
        club: Club; 
        volleys: number; 
        price: number; 
        nation: Nation; 
        ballcontrol: number; 
        weakFoot: number; 
        jumping: number; 
        skillMoves: number; 
        attributes: Attribute[]; 
        foot: string; 
        strength: number; 
        defWorkRate: string; 
        playerType: string; 
        league: League; 
        interceptions: number; 
        shortpassing: number; 
        gkpositioning: number; 
        name: string; 
        firstName: string; 
        longshots: number; 
        lastName: string; 
        age: number; 
        curve: number; 
        birthdate: string; 
        positionFull: string; 
        crossing: number; 
        position: string; 
        finishing: number; 
        balance: number; 
        vision: number; 

    }

    export interface ISmallPlayer
    {
        rating: number; 
        color: string; 
        quality: string; 
        playerid: number; 
        commonName: string; 
        baseId: number; 
        club: Club; 
        nation: Nation; 
        skillMoves: number; 
        attributes: Attribute[]; 
        playerType: string; 
        league: League; 
        name: string; 
        firstName: string; 
        longshots: number; 
        lastName: string; 
        positionFull: string; 

    }
