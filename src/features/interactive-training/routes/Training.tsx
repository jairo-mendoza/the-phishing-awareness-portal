import { useState } from 'react';

import { TrainingEnvironment } from '../TrainingEnvironment';
import { TrainingForm } from '../TrainingForm';

interface TrainingFormProps {
    medium: string;
    difficulty: string;
}

export const Training = () => {
    const [trainingConfig, setTrainingConfig] = useState<TrainingFormProps | null>(null);

    const handleConfigChange = (values: TrainingFormProps) => {
        setTrainingConfig(values);
    };

    return trainingConfig ? (
        <TrainingEnvironment
            medium={trainingConfig.medium}
            difficulty={trainingConfig.difficulty}
        />
    ) : (
        <TrainingForm handleConfigChange={handleConfigChange} />
    );
};
