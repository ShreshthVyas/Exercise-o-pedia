export const ExerciseOptions =  {
    method: 'GET',
   
    headers: {
      'X-RapidAPI-Key': '94b3a78f1bmsh662c7febf59376fp1dab64jsn819716c95f6f',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '94b3a78f1bmsh662c7febf59376fp1dab64jsn819716c95f6f',
    }
  };

export const fetchData = async (url , options) =>{
  
    const response = await fetch(url,options);
    const data = await response.json();
    return data;
}