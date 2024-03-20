import React from 'react'
interface formProps{
  form: any,
  handleChange: any
}

export default function Description({form, handleChange}:formProps) {
  const autoDescription = `${form.name} is a ${form.origin} ${form.archetype}.`

  const generateDescription = () => {
    form.description = autoDescription;
    handleChange({
      target: {
        name: 'description',
        value: autoDescription
      }
    } as React.ChangeEvent<HTMLTextAreaElement>);
  }

  return (
    <div className='flex flex-col'>
    <label onClick={generateDescription} className='font-bold'>Description <span><button className='bg-blue-300 rounded px-1 font-medium hover:text-white'>Generate</button></span></label>
    <textarea onChange={handleChange} value={form.description} className='resize-none me-10 px-4' name="description" id="description" cols={30} rows={4}  placeholder='Provide a brief description of your character here...'></textarea>
  </div>
  )
}
