import create from 'zustand';

type State = {
    selectedButton: string;
    setSelectedButton: (value: string) => void;
};

export const useStore = create<State>((set) => ({
    selectedButton: '',
    setSelectedButton: (selectedButton) => set({ selectedButton }),
}));
