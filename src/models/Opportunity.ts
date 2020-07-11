class Opportunity {
  id: string;

  title: string;

  lab: string;

  teacher: string;

  course: string;

  description: string;

  value: number;

  weekHours: number;

  openingDate: Date;

  closingDate: Date | null;

  isOpen: boolean;

  observation: string | null;

  minimumGrade: number | null;
}

export default Opportunity;
