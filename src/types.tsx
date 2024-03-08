import { FormEvent, ReactNode } from 'react';

export interface MovieData {
    id: string;
    title: string;
    release_date: string;
    poster_path: string;
    vote_average: number;
    genres: string[];
    runtime: number;
    overview: string;
}

export interface DialogOpenButtonProps {
    movieData?: MovieData;
    onDialogFormSubmit: () => void;
    isDeleteForm?: boolean;
    dialogTitle: string;
    buttonText: string;
}

export interface MovieFormProps {
    movieData?: MovieData;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    isDeleteForm: boolean;
}

export interface DialogProps {
    title: string;
    handleClose: () => void;
    children: ReactNode;
}
