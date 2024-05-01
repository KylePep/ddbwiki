import React from 'react'
interface formProps{
  form: any,
  handleChange: any
}

export default function Description({form, handleChange}:formProps) {

  const determineArticle = (word: string): string => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(word[0].toLowerCase()) ? 'an' : 'a';
  };

  const pronouns = form.pronouns.split('|')
  const height = form.height.replace(/([A-Z])/g, ' $1').trim()
  const article = determineArticle(form.origin)

  const autoDescription = `${form.name} is ${article} ${form.origin.toLowerCase()} ${form.archetype.toLowerCase()}, ${pronouns[0]} is ${height.toLowerCase()} and ${form.bodyType}.`

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
    <div className='flex flex-col bg-gray-300 p-2 rounded-md'>
    <label onClick={generateDescription} className='font-bold'>Description <span className='ms-2'><button className='bg-blue-300 rounded px-1 font-medium hover:text-white mb-1'>Generate</button></span></label>
    <textarea onChange={handleChange} value={form.description} className='resize-none me-10 px-4 w-full' name="description" id="description" cols={30} rows={4}  placeholder='Provide a brief description of your character here...'></textarea>
  </div>
  )
}
