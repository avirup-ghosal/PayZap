export function Button({label, onClick}) {
    return (
        <button 
            onClick={onClick} 
            type="button" 
            className="relative w-full text-white font-semibold rounded-xl text-sm px-6 py-3 mb-2 overflow-hidden transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-emerald-200 shadow-lg hover:shadow-xl group bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-500 hover:via-teal-500 hover:to-green-500"
        >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 transform"></div>
            </div>
            
            <span className="relative z-10 tracking-wide">
                {label}
            </span>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-white/30 group-hover:bg-white/50 transition-colors duration-300"></div>
        </button>
    )
}