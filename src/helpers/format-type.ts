const formatType = (type:string): string => {
    let color: string;
    switch(type) {
        case 'Feu':
            color = 'red';
            break;
        case 'Eau':
            color = 'blue';
            break;
        case 'Plante':
            color = 'green';
            break;
        case 'Insecte':
            color = 'brown';
            break;
        case 'Normal':
            color = 'grey';
            break;
        case 'Vol':
            color = 'blue';
            break;
        case 'Poison':
            color = 'purple';
            break;
        case 'Fée':
            color = 'pink';
            break;
        case 'Psy':
            color ='purple'
            break;
        case 'Électrique':
            color = 'lime';
            break;
        case 'Combat':
            color = 'orange';
            break;
        default:
            color = 'grey';
            break;
    }
    return `inline-flex items-center rounded-md bg-${color}-50 px-2 py-1 text-xs font-medium text-${color}-700 ring-1 ring-inset ring-${color}-700/10`;
}

export default formatType;