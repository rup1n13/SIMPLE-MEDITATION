import { View, Text, ImageBackground, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import meditationImages from '@/constants/meditation-images';
import { router, useLocalSearchParams } from 'expo-router';
import AppGradient from '@/components/AppGradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import CustumButton from '@/components/CustumButton';
import { Audio } from 'expo-av';
import { MEDITATION_DATA, AUDIO_FILES } from '@/constants/MeditationData';
import { TimerConstexte } from '@/context/TimerContext';

const Meditate = () => {
  const { id } = useLocalSearchParams();
  
	const {duration:remainingTime, setDuration} = useContext(TimerConstexte);

  //const [ remainingTime, setRemainingTime ] = useState(10);
	const [ isActive, setIsActive ] = useState(false);
	const [ audioSoundd, setAudioSound ] = useState<Audio.Sound>();
	const [ isPlayingAudio, setPlayingAudio ] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout >;

    if (isActive && remainingTime > 0) {
      timer = setTimeout(() => {
        setDuration(remainingTime - 1)
      }, 1000);
      
    } else if (remainingTime === 0) {
      setIsActive(false);
      return;
    }

    return () => {
      clearTimeout(timer);
    }
 
	}, [ remainingTime, isActive ]);

	useEffect(() => {
		return () => {
			setDuration(10);
			audioSoundd?.unloadAsync();
		}
	}, [audioSoundd])
	
	const toogleMeditaionSessionStatus = async () => {
		if (remainingTime === 0) setDuration(10);

		setIsActive(!isActive);

		await toogleSond();
	}

	const toogleSond = async () => {
		const sound = audioSoundd ? audioSoundd : await initilizeSound();

		const status = await sound?.getStatusAsync();
		if(status?.isLoaded && !isPlayingAudio) {
			await sound.playAsync();
			setPlayingAudio(true);
		} else {
			await sound.pauseAsync();
			setPlayingAudio(false);
		}
	}

	const initilizeSound = async () => {
		const audioFileName = MEDITATION_DATA[ Number(id) - 1 ].audio;
		const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[ audioFileName ]);
		setAudioSound(sound);
		return sound;
	}

	const handleAdjustMeditationDuration = () => {
		if (isActive) toogleMeditaionSessionStatus();

		router.push('/(modal)/adjust-meditation-duration');
	}

  //formate the time to ensure two digit left
  const fromatedTime = String(Math.floor(remainingTime / 60)).padStart(2, '0');
  const fromatedSeconds = String(remainingTime % 60).padStart(2, '0');
  return (
		<View className='flex-1'>
			<ImageBackground
				source={meditationImages[Number(id) - 1]}
				className='flex-1'
				resizeMode='cover'
			>
				<AppGradient colors={['transparent', 'rgba(0,0,0,0.8)']}>
					<Pressable onPress={router.back} className='absolute top-12 left-5 z-10'>
						<AntDesign name='leftcircleo' size={50} color='white' />
					</Pressable>

					<View className='flex-1 justify-center'>
						<View className='mx-auto w-44 h-44 rounded-full bg-neutral-100 justify-center'>
							<Text className='text-center text-2xl font-bold text-slate-700'>
								{fromatedTime}:{fromatedSeconds}
							</Text>
						</View>
					</View>

					<View className='mb-8'>
						<CustumButton
							title='Adjust Duration'
							onPress={handleAdjustMeditationDuration}
							textStyle={'text-slate-700'}
						/>
						<CustumButton
							title={isActive ? 'Stop' : 'Start Meditation'}
							onPress={toogleMeditaionSessionStatus}
							containerStyle={'mt-4'}
							textStyle={'text-slate-700'}
						/>
					</View>
				</AppGradient>
			</ImageBackground>
		</View>
	);
}

export default Meditate