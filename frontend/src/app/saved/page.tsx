import WeatherModal from '../../components/WeatherModal'
import SavedUserList from '../../components/SavedUserList'

export default function SavedUsers() {
	return (
		<div className={`px-6 w-full flex flex-col items-center max-w-[1536px] mx-auto`}>
			<SavedUserList />
			<WeatherModal />
		</div>
	);
}
