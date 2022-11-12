import React from 'react';
import { StyleSheet} from 'react-native';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import Benzo from './Lists/Benzo';
import Cocaine from './Lists/Cocaine';
import Fentanyl from './Lists/Fentanyl';
import Meth from './Lists/Meth';
import Opioid from './Lists/Opioid';

export default function TipSelector(drugType){
    
    let selection = null;

    //force capitalization of the first letter to make if statements simpler
    let properDrugType = drugType.charAt(0).toUpperCase() + drugType.slice(1).toLowerCase();

    if((properDrugType === 'Benzodiazepines') || (properDrugType === 'Benzo')){
        
        selection = <Benzo/>

    }else if(properDrugType === 'Heroin'){

        selection = <Opioid/>//tips are the same for herion and opioids so the heroin state will be the same as the opioid state
    
    }else if((properDrugType === 'Cocaine') || (properDrugType === 'Coke')){

        selection = <Cocaine/>

    }else if(properDrugType === 'Meth'){

        selection = <Meth/>
    
    }else if(properDrugType === 'Opiods'){

        selection = <Opioid/>

    }else /*This is the general case (which is also the fentanyl)*/{

        selection = <Fentanyl/>
        
    }

    return selection;

}