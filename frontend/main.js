
export let selectedTag = 0;

export function selectTag(tagname){
    selectedTag = tagname;
}

export function getSelectedTag(){
    return selectedTag;
}