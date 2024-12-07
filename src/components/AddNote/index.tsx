import React, { useEffect, useState } from 'react';
import Button from '../common/Button';
import { Plus } from '@phosphor-icons/react';
import { COLORS } from '../../utils/constant';
import useCreateNote from '../../stores/useCreateNote';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const AddNote: React.FC = () => {
  const [showColors, setShowColors] = useState<boolean>(false);
  const { notes, createNote } = useCreateNote();
  const [value, setValue] = useLocalStorage("notes", notes);

  useEffect(() => {
    setValue(notes);
  }, [notes]);

  const handleShowColors = () => {
    setShowColors(!showColors);
  };

  const handleSetColor = (color: string) => {
    const note = {
      title: "Note title...",
      content: "Content here...",
      color: color,
    }

    const updatedNotes = [...value, note];

    createNote(updatedNotes);
    setValue(updatedNotes);

    console.log(color, note);
  };

  return (
    <div className='flex items-center sm:flex-col flex-row-reverse'>
      <Button onClick={handleShowColors} className={`!p-0 h-9 w-9 sm:mb-6 transition-all duration-500 ${showColors ? "rotate-[135deg]" : "rotate-0"} active:scale-[0.9]`}>
        <Plus size={20} weight="bold" />
      </Button>
      <div className="flex flex-row-reverse sm:flex-col gap-4 sm:mr-0 mr-6">
        {COLORS?.map((color: string, index: number) => (
          <Button
            key={index}
            onClick={() => handleSetColor(color)}
            className={`!bg-transparent !p-0 h-4 aspect-square rounded-full overflow-hidden transform transition-all duration-200 ${showColors ? 'scale-100' : 'scale-0'
              }`}
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <span
              className="h-full w-full"
              style={{ backgroundColor: color }}
            ></span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default AddNote;