const Checkbox = () => {
	return (
		<label htmlFor="Conditions">
            <input id="Conditions" type="checkbox" name="Conditions" className="h-3 w-3 rounded-full" />
            <span className="my-1 text-[14px]">saya setuju dengan syarat persyaratan</span>
        </label>
	)
}

export default Checkbox;