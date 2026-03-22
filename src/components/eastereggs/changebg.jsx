import './changebg.css';

export default function Changebg({theme, toggleTheme}) {
    return (
            <button id="changebgbtn" title="Byt bakgrunds bild" className={'changebackgroundbtn' + (theme === 'default' ? ' default' : ' digitalrain')} onClick={() => toggleTheme(theme === 'digitalrain' ? 'default' : 'digitalrain') }>
                {theme === 'digitalrain' ? 'Tillbaka till svart' : 'Digital Rain'}
            </button>
    );
}