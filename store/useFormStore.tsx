import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

import { StepOneData, StepTwoData, StepThreeData } from '../types/formStore';

const stepVariant = {
    1: 'stepOne',
    2: 'stepTwo',
    3: 'stepThree',
};

type setDataType =
    | { step: 1; data: StepOneData }
    | { step: 2; data: StepTwoData }
    | { step: 3; data: StepThreeData };

interface StoreState {
    stepOne: StepOneData | null;
    stepTwo: StepTwoData | null;
    stepThree: StepThreeData | null;
    setData: ({ step, data }: setDataType) => void;
}

const useFormStore = create<StoreState>(
    devtools((set) => ({
        stepOne: null,
        stepTwo: null,
        stepThree: null,
        setData: ({ step, data }) => set((state) => ({
            ...state,
            [stepVariant[step]]: data,
        })),
    })) as StateCreator<StoreState, [['zustand/devtools', never]]>
);


export default useFormStore;